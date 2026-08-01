'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label, Select } from '@/components/ui/field'
import { productCategories } from '@/lib/site'

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission — connect to your backend or email service here.
    setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="font-serif text-2xl font-bold">Quote request received</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our procurement team will review your requirement and get back
          to you with a competitive quote, usually within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="q-name">Full Name *</Label>
          <Input id="q-name" name="name" required placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="q-company">Company Name</Label>
          <Input id="q-company" name="company" placeholder="Your company" />
        </div>
        <div>
          <Label htmlFor="q-email">Email *</Label>
          <Input id="q-email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div>
          <Label htmlFor="q-phone">Phone *</Label>
          <Input id="q-phone" name="phone" type="tel" required placeholder="+91 00000 00000" />
        </div>
        <div>
          <Label htmlFor="q-category">Product Category *</Label>
          <Select id="q-category" name="category" required defaultValue="">
            <option value="" disabled>
              Select a category
            </option>
            {productCategories.map((c) => (
              <option key={c.title} value={c.title}>
                {c.title}
              </option>
            ))}
            <option value="Custom Sourcing">Custom Sourcing / Other</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="q-quantity">Estimated Quantity</Label>
          <Input id="q-quantity" name="quantity" placeholder="e.g. 500 units" />
        </div>
      </div>
      <div>
        <Label htmlFor="q-details">Requirement Details *</Label>
        <Textarea
          id="q-details"
          name="details"
          required
          placeholder="List the products, specifications, brands and any delivery timelines."
          className="min-h-32"
        />
      </div>
      <Button type="submit" disabled={status === 'submitting'} className="h-11 w-full sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Submit Quote Request
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our{' '}
        <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  )
}
