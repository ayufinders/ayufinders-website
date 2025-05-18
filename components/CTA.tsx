"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function CounselingSection({ showDialog = true }: { showDialog?: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "All fields are required!",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const url =
        "https://script.google.com/macros/s/AKfycbw5mMU7CjYEE-4f3rASatokSxleFwb0Yzt7aoscM9e1M-YqrL2LpUQuW0BfS_nJx98FmQ/exec";
      const res = await fetch(url, {
        method: "POST",
        body: `Name=${formData.name}&Email=${formData.email}&Phone=${formData.phone}&Message=${formData.message}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (res.ok) {
        toast({
          title: "Message Sent",
          description: "Our team will contact you shortly!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setOpen(false);
        setHasSubmitted(true);
        sessionStorage.setItem("filled", "1");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto md:mb-20 mb-10 md:mt-4 my-6 bg-gradient-to-b from-primary/50 to-primary rounded-2xl shadow-md">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Content */}
        <div className="flex-1 px-4 md:px-8 py-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Free Expert Guidance for Your B.A.M.S. Journey
          </h2>
          <p className="text-gray-100 text-lg mb-6 max-w-2xl">
            Confused about the BAMS admission process? We’ve got your back! Talk to our experienced counselors who will guide you on eligibility, counseling rounds, college selection, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <Button onClick={() => setOpen(true)} className="px-8 py-6 text-lg bg-black text-white hover:bg-black/80">
                Get Free Counseling
              </Button>
              <DialogContent className="sm:max-w-md px-4">
                <DialogHeader>
                  <DialogTitle>Free BAMS Counseling</DialogTitle>
                  <DialogDescription>
                    Share your details — our team will get in touch with you.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Your Query</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        placeholder="Ask us anything about BAMS admission..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-blue-600 text-white w-full">
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Button
              onClick={() => router.push("/colleges")}
              className="px-8 py-6 text-lg bg-gray-100 text-black hover:bg-gray-50 border-none"
            >
              Explore BAMS Colleges
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
