import { goto } from '$app/navigation';


export async function deleteAccount(companyname:string, user_id:number) {
  try {
    const answer = confirm('Are you sure you want to delete this entry?');
    console.log('ANSWER: ', answer);
    if (answer) {
      const response = await fetch('/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyname,
          user_id
        })
      });

      if (response.ok) {
        goto('/dashboard');
      } else {
        console.error('Failed to delete account');
      }
    }
  } catch (e) {
    console.error('An error occured while deleting the account: ', e);
  }
}

// export async function handleSubmit(event) {
//   try {
//     const answer = confirm('Are you sure you want to update this entry?');

//     if (answer) {
//       event.preventDefault();
//       const response = await fetch('/api/edit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         goto('/dashboard');
//       } else {
//         console.error('Failed to edit account');
//       }
//     }
//     else {
//       goto(`/dashboard/${data.slug}`);
//     }
//   } catch (error) {
//     console.error('An error occurred while trying to edit account');
//   }
// }