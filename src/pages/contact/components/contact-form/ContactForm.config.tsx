import { TextField } from "@mui/material";

const contactFieldProps = [
  { name: "from_name", label: "Name" },
  { name: "from_email", label: "Email" },
  { name: "from_phone", label: "Phone" },
  { name: "message", label: "Message" },
];


export const contactInitialValues: {
  from_email: string | null,
  from_phone: string | null,
  message: string | null
} = {
  from_email: null,
  from_phone: null,
  message: null
}

export const ContactFields = ({form}: {form: JSX.IntrinsicAttributes & React.MutableRefObject<null>}) => {
  const contactFields = contactFieldProps.map((field, index) => {
  return (
    <TextField
      key={index}
      name={field.name}
      label={field.label}
      variant='filled'
      color='primary'
      inputRef={form?.current?.[field.name as keyof typeof form]}
      focused
      inputProps={{ style: { color: "white" } }}
    />
  );
  });
  return <>{ contactFields }</>;
}