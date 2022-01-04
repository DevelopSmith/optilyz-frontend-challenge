import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    maxWidth: 330,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "1.25rem",
    marginTop: "2rem",
    outline: "none",
  },
  labelRoot: {
    color: "#AAAAAA",
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: "1rem",
    marginBottom: "1.5rem",
    paddingBottom: "0.25rem",
    letterSpacing: "unset",
  },
  input: {
    marginBottom: "1.25rem",
  },
}));
