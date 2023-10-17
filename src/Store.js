import { writable } from "svelte/store";

const accountStore = writable({
  companyname: '',
  url: '',
  username: '',
  password: '',
  iv: '',
});

export const showAlert = writable(false);

export default accountStore;
