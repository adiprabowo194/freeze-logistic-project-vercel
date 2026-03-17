import { ContactInput } from "./schema";

export function emailTemplate(data: ContactInput) {

  return `
    <div style="font-family:sans-serif">
      <h2>New Contact from Get Started Page</h2>

      <p><strong>Company Name:</strong> ${data.company_name}</p>
      <p><strong>Name:</strong> ${data.contact_name}</p>
      <p><strong>Contact:</strong> ${data.contact_number}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Suburb:</strong> ${data.suburb}</p>
      <p><strong>Street Address:</strong> ${data.street_address}</p>

      <p><strong>Enquiry:</strong></p>
      <p>${data.enquiry}</p>
    </div>
  `;
}