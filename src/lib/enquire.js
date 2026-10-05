// Lets any "Enquire" / "Book Now" button pre-fill the contact form subject.
export const ENQUIRE_EVENT = 'portfolio:enquire'

export function enquire(subject) {
  window.dispatchEvent(new CustomEvent(ENQUIRE_EVENT, { detail: subject }))
}
