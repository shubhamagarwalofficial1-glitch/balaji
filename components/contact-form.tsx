'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/field'

export function ContactForm() {
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
        <h3 className="font-serif text-2xl font-bold">Message sent</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for getting in touch with Shree Balaji Enterprises. A member of our team will
          respond to your message shortly.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send another message
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
          <Label htmlFor="c-name">Full Name *</Label>
          <Input id="c-name" name="name" required placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="c-email">Email *</Label>
          <Input id="c-email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div>
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" name="phone" type="tel" placeholder="+91 00000 00000" />
        </div>
        <div>
          <Label htmlFor="c-subject">Subject *</Label>
          <Input id="c-subject" name="subject" required placeholder="How can we help?" />
        </div>
      </div>
      <div>
        <Label htmlFor="c-message">Message *</Label>
        <Textarea
          id="c-message"
          name="message"
          required
          placeholder="Tell us about your requirement or enquiry."
          className="min-h-32"
        />
      </div>
      <Button type="submit" disabled={status === 'submitting'} className="h-11 w-full sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
