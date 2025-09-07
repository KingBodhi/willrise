
"use client";
import { useState } from "react";

export default function LeadForm({ vertical }:{ vertical?: string }){
  const [sent,setSent]=useState(false);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch("/api/contact",{ method:"POST", body: fd });
    setSent(true);
  }

  const isGeneric = !vertical;

  return sent ? (
    <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-green-900 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-200">
      Thanks! We’ll be in touch shortly.
    </div>
  ) : (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <input name="name" required placeholder="Name" className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900" />
      <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900" />

      {isGeneric ? (
        <>
          <input name="org" placeholder="Organization (optional)" className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900 md:col-span-2" />
          <textarea name="message" required placeholder="How can we help?" className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900 md:col-span-2 min-h-[120px]" />
        </>
      ) : (
        <>
          <input name="org" placeholder="Organization" className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900 md:col-span-2" />
          <select name="vertical" defaultValue={vertical||""} className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900">
            <option value="">Vertical</option>
            <option>Military</option>
            <option>Construction</option>
            <option>Pleasure</option>
          </select>
          <input name="region" placeholder="Region" className="rounded-lg border border-alloy/50 p-3 bg-white dark:bg-neutral-900" />
          <label className="md:col-span-2 flex items-center gap-2 text-sm">
            <input type="checkbox" name="nda" className="size-4" /> I’m open to signing an NDA to review the full dossier.
          </label>
        </>
      )}

      <button className="md:col-span-2 rounded-lg bg-signal px-4 py-3 font-bicubik text-white" type="submit">
        {isGeneric ? "Send Message" : "Request Dossier"}
      </button>
    </form>
  );
}
