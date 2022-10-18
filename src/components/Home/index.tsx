import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  ContainerCountry,
  ContainerCountryText,
  ContainerGroupCountry,
} from "./styles";

export function Home() {
  const [country, setCountry] = useState<any[]>([]);

  async function getCountries() {
    const response = await api.get("all");
    setCountry(response.data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Container>
      <ContainerGroupCountry>
        {country.map((teste: any, number = 1) => (
          <ContainerCountry key={teste.name.official}>
            <img src={teste.flags.png} alt="" />
            <ContainerCountryText>
              <p>
                {number + 1} {teste.name.official}
              </p>
              <span>
                <h4>Population: {teste.population}</h4>
                <h4>Region: {teste.region}</h4>
                <h4>Capital: {teste.capital}</h4>
              </span>
            </ContainerCountryText>
          </ContainerCountry>
        ))}
      </ContainerGroupCountry>
    </Container>
  );
}
