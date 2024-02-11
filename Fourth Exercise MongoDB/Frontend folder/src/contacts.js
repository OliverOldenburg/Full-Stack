import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import axios from "axios";
import qs from "qs";

// Fetch contacts from server, optionally filtered and sorted.
export async function getContacts(query) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await axios("http://localhost:3000/contact/all").then(
      (response) => {
          return response.data.contacts;
      }
  );
  if (!contacts) contacts = [];
  if (query) {
      contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

// Create a new contact.
export async function createContact() {
  await fakeNetwork();
  let contactDate = { createdAt: Date.now() };
  const data = qs.stringify(contactDate);

  let contact = await axios
      .post("http://localhost:3000/contact/create", data)
      .then((response) => {
          var person = {
              id: response.data.contact._id,
          };
          return person;
      });
  return contact;
}

// Fetch a contact by ID.
export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contact = await axios
      .get(`http://localhost:3000/contact/find/${id}`)
      .then((response) => {
          return response.data.contact[0];
      });
  return contact ?? null;
}

// Update a contact.
export async function updateContact(id, updates) {
  await fakeNetwork();
  const data = qs.stringify(updates);
  const contact = await axios.patch(
      `http://localhost:3000/contact/edit/${id}`,
      data
  );
  return contact;
}

// Delete a contact.
export async function deleteContact(id) {
    await axios.delete(`http://localhost:3000/contact/delete/${id}`);
}

// Simulate network delay.
let fakeCache = {};
async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
