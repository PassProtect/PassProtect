import { writable } from "svelte/store";

const accountStore = writable({
  companyname: '',
  url: '',
  username: '',
  password: '',
});

export const showAlert = writable(false);

export default accountStore;
