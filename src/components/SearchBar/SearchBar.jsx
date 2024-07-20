import { Form, Formik, Field } from "formik";

export const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Enter" type="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
