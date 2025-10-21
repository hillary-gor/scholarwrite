"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Code, Presentation, Edit, Check, Minus, Plus, Loader2, CheckCircle2 } from "lucide-react"
import { createOrder } from "@/app/actions/orders"
import type { OrderType } from "@/lib/types/database"

interface OrderFormModalProps {
  isOpen: boolean
  onClose: () => void
  selectedService?: string
}

export function OrderFormModal({ isOpen, onClose, selectedService }: OrderFormModalProps) {
  const [step, setStep] = useState(1)
  const [orderType, setOrderType] = useState<OrderType>("writing")
  const [paperType, setPaperType] = useState("essay")
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [instructions, setInstructions] = useState("")
  const [pageCount, setPageCount] = useState(2)
  const [deadline, setDeadline] = useState("10-days")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleClose = () => {
    setStep(1)
    setSubmitSuccess(false)
    setSubmitError(null)
    onClose()
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    // Calculate price based on deadline
    const priceMap: Record<string, number> = {
      "3-hours": 45,
      "1-day": 32,
      "2-days": 24,
      "3-days": 20,
      "5-days": 16,
      "10-days": 12,
    }
    const pricePerPage = priceMap[deadline] || 12
    const totalPrice = pricePerPage * pageCount

    // Calculate deadline date
    const deadlineDate = new Date()
    const hoursMap: Record<string, number> = {
      "3-hours": 3,
      "1-day": 24,
      "2-days": 48,
      "3-days": 72,
      "5-days": 120,
      "10-days": 240,
    }
    deadlineDate.setHours(deadlineDate.getHours() + (hoursMap[deadline] || 240))

    const result = await createOrder({
      order_type: orderType,
      service_name: selectedService || paperType,
      paper_type: paperType,
      subject: subject,
      topic: topic || instructions.slice(0, 100),
      instructions: instructions,
      page_count: pageCount,
      deadline: deadlineDate.toISOString(),
      price: totalPrice,
      email: email,
      full_name: fullName || undefined,
      phone: phone || undefined,
    })

    setIsSubmitting(false)

    if (result.success) {
      setSubmitSuccess(true)
      // Reset form after 2 seconds
      setTimeout(() => {
        handleClose()
      }, 2000)
    } else {
      setSubmitError(result.error || "Failed to submit order. Please try again.")
    }
  }

  if (submitSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold">Order Submitted!</h2>
            <p className="text-muted-foreground">
              Your order has been successfully submitted. We'll send you a confirmation email shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {step === 1 && "Select your order type"}
            {step === 2 && "Provide your order details"}
            {step === 3 && "Give your instructions"}
            {step === 4 && "Specify your deadline"}
            {step === 5 && "Create your account"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            {step === 1 && "Knowing your goal allows us to find the best person for the job."}
            {step === 2 && "These details are essential and help writers understand what you need."}
            {step === 3 && "Specify your needs to ensure our writers deliver flawless work"}
            {step === 4 && "When do you need your order to be ready? The deadline affects the price."}
            {step === 5 && "We protect your personal information"}
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step 1: Order Type */}
          {step === 1 && (
            <div className="space-y-4">
              <RadioGroup value={orderType} onValueChange={(value) => setOrderType(value as OrderType)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label
                    htmlFor="writing"
                    className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      orderType === "writing" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="writing" id="writing" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Writing</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Only $8/page</p>
                      <p className="text-sm">
                        Get an essay or paper written according to your instructions by a professional writer.
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="technical"
                    className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      orderType === "technical" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="technical" id="technical" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Technical</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Expert help</p>
                      <p className="text-sm">
                        Get an expert's help with math problems, data analysis, coding, labs, accounting, etc.
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="presentation"
                    className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      orderType === "presentation" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="presentation" id="presentation" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Presentation className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Presentation</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Custom slides</p>
                      <p className="text-sm">
                        Get a custom-made presentation from scratch or let us fine-tune your draft.
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="editing"
                    className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      orderType === "editing" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="editing" id="editing" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Edit className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Editing</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Professional review</p>
                      <p className="text-sm">
                        Get your paper edited, proofread, or have AI content revised by a professional editor.
                      </p>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 2: Order Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paper-type">Type of paper</Label>
                <Select value={paperType} onValueChange={setPaperType}>
                  <SelectTrigger id="paper-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="essay">Essay</SelectItem>
                    <SelectItem value="research-paper">Research paper</SelectItem>
                    <SelectItem value="assignment">Assignment</SelectItem>
                    <SelectItem value="discussion-post">Discussion post</SelectItem>
                    <SelectItem value="essay-any">Essay (Any Type)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="nursing">Nursing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  placeholder="Enter your topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 3: Instructions */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions (required)</Label>
                <Textarea
                  id="instructions"
                  placeholder={selectedService || "Enter your instructions here..."}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">Don't share personal info (name, email, phone, etc).</p>
              </div>

              <div className="space-y-2">
                <Label>Attach files</Label>
                <Input type="file" multiple />
              </div>

              <div className="space-y-2">
                <Label>Page count</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setPageCount(Math.max(1, pageCount - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-semibold w-12 text-center">{pageCount}</span>
                  <Button type="button" variant="outline" size="icon" onClick={() => setPageCount(pageCount + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {pageCount} double-spaced pages are {pageCount * 275} words.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Formatting style</Label>
                  <Select defaultValue="apa">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apa">APA</SelectItem>
                      <SelectItem value="mla">MLA</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="harvard">Harvard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Number of sources</Label>
                  <Select defaultValue="3">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Deadline */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Deadline</Label>
                <RadioGroup value={deadline} onValueChange={setDeadline}>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "3-hours", label: "3 hours", price: "$45" },
                      { value: "1-day", label: "1 day", price: "$32" },
                      { value: "2-days", label: "2 days", price: "$24" },
                      { value: "3-days", label: "3 days", price: "$20" },
                      { value: "5-days", label: "5 days", price: "$16" },
                      { value: "10-days", label: "10 days", price: "$12" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center justify-between p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                          deadline === option.value ? "border-primary bg-primary/5" : "border-border"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value={option.value} />
                          <span className="font-medium">{option.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">{option.price}</span>
                      </label>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg bg-muted/50">
                <Checkbox id="early-draft" />
                <div className="flex-1">
                  <Label htmlFor="early-draft" className="font-medium cursor-pointer">
                    Need an early draft?
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Monitor the progress of your order and have a first draft ready way before the deadline.
                  </p>
                  <p className="text-sm font-semibold text-primary mt-2">Add for +15% to the price</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Account Creation */}
          {step === 5 && (
            <div className="space-y-4">
              {submitError && (
                <div className="p-3 bg-destructive/10 border border-destructive rounded-lg text-sm text-destructive">
                  {submitError}
                </div>
              )}

              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">Already have an account? Log in</p>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full bg-transparent" type="button">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" type="button">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Apple
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">or</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">Full name (optional)</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By clicking 'Create an account', you agree to our Terms and Conditions and Privacy Policy.
              </p>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">
                  Entrusted by 200K+ students from 258 universities worldwide
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Human-crafted papers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Personal approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Payment Protection</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
              Back
            </Button>
          )}
          {step < 5 ? (
            <Button onClick={handleNext} className="ml-auto bg-accent text-accent-foreground hover:bg-accent/90">
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !email}
              className="ml-auto bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Create an account"
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
