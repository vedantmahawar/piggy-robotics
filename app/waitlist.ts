"use server";

// the implementation of this is custom to the waitlist

export default async function addToWaitlist(formData: FormData) {
  const email = formData.get("email");
  const url =
    "";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();
  return data;
}
