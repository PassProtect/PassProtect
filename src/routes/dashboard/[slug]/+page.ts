export const load = ({ params }) => {

  const sum = (a:number,b:number) => {
    return a + b;
  }

  const result = sum(2,2);

  //get app from making a db call to params.slug
  const app = {
    url : `${params.slug}.com`,
    username : 'geoff',
    password : '123'
  }


  return {
    slug : params.slug,
    result,
    app
  }
}