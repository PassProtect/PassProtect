import { writable } from "svelte/store";

const accountStore = writable({
  companyname: '',
  url: '',
  username: '',
  password: ''
});

export default accountStore;
