type ProductParams = {
  params: {
    id: number;
  };
};
export default function Product({params}: ProductParams) {
  return <h1>product:{params.id}</h1>;
}
