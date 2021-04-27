import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core";

const theme = makeStyles({
  root: {
    "&.MuiInput-underline:after": {
      borderBottomColor: "#E1831D",
    }
  }
})

function Select({ onChange, options }) {

  const classes = theme();

  return (
    <div>
      <NativeSelect defaultValue="" onChange={onChange} className={classes.root}>
        <option disabled value="">
          Select
        </option>
        {options.map((options) => (
          <option value={options.value} key={options.value}>
            {options.text}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
}

export default Select;
