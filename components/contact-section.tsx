"use client"

import { useActionState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { MailIcon, SendIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { submitContactForm } from "@/lib/actions"

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="container mx-auto py-16 px-4">
      <Card className="bg-portfolio-card-bg shadow-xl rounded-2xl p-8 md:p-12 border border-portfolio-border">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold text-portfolio-primary-blue mb-4">
            Get in Touch ✉️
          </CardTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-primary-blue mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4 text-portfolio-text">
              <MailIcon className="h-6 w-6 text-portfolio-accent-teal" />
              <a href="mailto:siwar.bouaziz@ensi-uma.tn" className="text-lg hover:underline">
                siwar.bouaziz@ensi-uma.tn
              </a>
            </div>
            <div className="flex items-start space-x-4 text-portfolio-text">
              <MapPinIcon className="h-6 w-6 text-portfolio-accent-teal flex-shrink-0 mt-1" />
              <span className="text-lg">Tunis, Tunisia</span>
            </div>
            <p className="text-gray-600 text-base mt-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <form action={formAction} className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-primary-blue mb-4">Send a Message</h3>
            <div>
              <Label htmlFor="name" className="text-lg font-medium text-portfolio-text mb-2 block">
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="h-12 text-lg border-portfolio-border focus:border-portfolio-primary-blue focus:ring-portfolio-primary-blue"
              />
              {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-lg font-medium text-portfolio-text mb-2 block">
                Your Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                className="h-12 text-lg border-portfolio-border focus:border-portfolio-primary-blue focus:ring-portfolio-primary-blue"
              />
              {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-lg font-medium text-portfolio-text mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows={6}
                required
                className="text-lg border-portfolio-border focus:border-portfolio-primary-blue focus:ring-portfolio-primary-blue"
              />
              {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-portfolio-primary-blue hover:bg-portfolio-primary-blue/90 text-white text-lg py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              {isPending ? (
                <>
                  <MailIcon className="h-5 w-5 mr-2 animate-pulse" /> Sending...
                </>
              ) : (
                <>
                  <SendIcon className="h-5 w-5 mr-2" /> Send Message
                </>
              )}
            </Button>
            {state?.success && <p className="text-green-600 text-center mt-4 text-lg font-medium">{state.message}</p>}
            {state && !state.success && state.message && (
              <p className="text-red-600 text-center mt-4 text-lg font-medium">{state.message}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
