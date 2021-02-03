import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import corona from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={corona} alt="CORONA VIRUS" />
        <Cards data={data} />
        <CountryPicker
          className="country"
          handleCountryChange={this.handleCountryChange}
        />
        <Chart data={data} country={country} />
        <Typography className="details" variant="h5">
          Developed By Tim Zgeybi "\n"
          On the 23rd of April 2020
        </Typography>
        <Typography className="details">
          Instagram:
          <Link href="https://www.instagram.com/zgeybi/">
            Zgeybi
          </Link>{" "}
        </Typography>
        <Typography className="details">
          Facebook:
          <Link href="https://www.facebook.com/tim.zeghaibe.581">
            Tim Zgeybi
          </Link>
        </Typography>
      </div>
    );
  }
}

export default App;
