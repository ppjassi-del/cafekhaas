import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { site } from "@/lib/site-config";
import { Calendar, Clock, Users, Phone, MessageSquare, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultDate?: string;
}

export function ReservationDialog({
  open,
  onOpenChange,
}: ReservationDialogProps) {
  const [date, setDate] = React.useState<string>("Today");
  const [time, setTime] = React.useState<string>("07:00 PM");
  const [guests, setGuests] = React.useState<string>("2 Guests");
  const [seating, setSeating] = React.useState<string>("Indoor Cozy");
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [specialNote, setSpecialNote] = React.useState<string>("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const timeSlots = [
    "12:00 PM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
    "07:00 PM",
    "08:30 PM",
    "09:30 PM",
  ];

  const guestOptions = [
    "1 Guest",
    "2 Guests",
    "3-4 Guests",
    "5-8 Guests",
    "Party (8+)",
  ];

  const seatingOptions = [
    "Indoor Cozy",
    "Window View",
    "Outdoor Terrace",
    "Quiet Corner",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your contact number");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      toast.success("Table Reservation Request Submitted!", {
        description: `We'll confirm your reservation for ${guests} on ${date} at ${time} shortly.`,
      });
    }, 600);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Khaas (ਖਾਸ) team! I would like to reserve a table:\n\n• Name: ${name || "Guest"}\n• Phone: ${phone || "Not provided"}\n• Date: ${date}\n• Time: ${time}\n• Guests: ${guests}\n• Seating: ${seating}${specialNote ? `\n• Notes: ${specialNote}` : ""}\n\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/917431000069?text=${text}`, "_blank");
    toast.info("Opening WhatsApp with your reservation details...");
    onOpenChange(false);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg overflow-hidden border border-border bg-background p-0 sm:max-w-xl">
        <div className="bg-espresso px-6 py-6 text-espresso-foreground">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-medium">Khaas</span>
            <span className="text-accent">|</span>
            <span lang="pa" className="font-gurmukhi text-xl font-bold">
              ਖਾਸ
            </span>
          </div>
          <DialogTitle className="mt-2 font-display text-2xl font-light text-espresso-foreground">
            Reserve a Table
          </DialogTitle>
          <DialogDescription className="mt-1 text-xs text-espresso-foreground/75">
            Signature Tower, Jawahar Nagar, Jalandhar · Closes at 10 PM
          </DialogDescription>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-6 py-5">
          {isConfirmed ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                Reservation Request Received!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you, <strong>{name}</strong>. Our café team has received your table
                inquiry for <strong>{guests}</strong> on <strong>{date}</strong> at{" "}
                <strong>{time}</strong> ({seating}).
              </p>
              <div className="mt-6 rounded-lg border bg-card p-4 text-left text-sm space-y-1">
                <p>
                  <span className="text-muted-foreground">Contact:</span> {phone}
                </p>
                <p>
                  <span className="text-muted-foreground">Location:</span> Signature Tower,
                  Jawahar Nagar, Jalandhar
                </p>
                {specialNote && (
                  <p>
                    <span className="text-muted-foreground">Notes:</span> {specialNote}
                  </p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </button>
                <button type="button" onClick={handleReset} className="btn btn-primary">
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Date selection */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Select Date
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["Today", "Tomorrow", "This Weekend"].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDate(d)}
                      className={`flex items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-medium transition-colors ${
                        date === d
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time selection */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Select Time Slot
                </label>
                <div className="mt-2 grid grid-cols-4 gap-1.5">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`flex items-center justify-center gap-1 rounded-md border py-2 text-xs transition-colors ${
                        time === t
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      <Clock className="h-3 w-3" />
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests selection */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Number of Guests
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {guestOptions.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGuests(g)}
                      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        guests === g
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      <Users className="h-3 w-3" />
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Seating Preference
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {seatingOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSeating(s)}
                      className={`flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors ${
                        seating === s
                          ? "border-accent bg-accent text-accent-foreground font-semibold"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest details */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="res-name"
                    className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Your Name *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="e.g. Jaspreet Singh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="res-phone"
                    className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="e.g. 098765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="res-note"
                  className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                >
                  Occasion or Special Note (Optional)
                </label>
                <input
                  id="res-note"
                  type="text"
                  placeholder="e.g. Birthday celebration, Quiet table, High chair needed"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full shadow-sm"
                >
                  {isSubmitting ? "Submitting..." : "Confirm Table Reservation"}
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-600 bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-200"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Reserve via WhatsApp
                  </button>
                  <a
                    href={site.phoneHref}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2.5 text-xs font-semibold hover:bg-secondary transition"
                  >
                    <Phone className="h-4 w-4" />
                    Call {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
