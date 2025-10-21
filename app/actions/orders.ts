"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { CreateOrderInput, Order } from "@/lib/types/database"

export async function createOrder(input: CreateOrderInput) {
  try {
    // Create Supabase client
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch {
              // The `setAll` method was called from a Server Component.
              // This can be ignored if you have middleware refreshing
              // user sessions.
            }
          },
        },
      },
    )

    // Get current user (if authenticated)
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Insert order into database
    const { data, error } = await supabase
      .from("orders")
      .insert({
        user_id: user?.id || null,
        order_type: input.order_type,
        service_name: input.service_name,
        paper_type: input.paper_type,
        subject: input.subject,
        topic: input.topic,
        instructions: input.instructions || null,
        page_count: input.page_count,
        file_urls: input.file_urls || null,
        deadline: input.deadline,
        price: input.price,
        email: input.email,
        full_name: input.full_name || null,
        phone: input.phone || null,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error creating order:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: data as Order }
  } catch (error) {
    console.error("[v0] Unexpected error creating order:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}

export async function getUserOrders(userId: string) {
  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch {
              // Ignore
            }
          },
        },
      },
    )

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching orders:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: data as Order[] }
  } catch (error) {
    console.error("[v0] Unexpected error fetching orders:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
