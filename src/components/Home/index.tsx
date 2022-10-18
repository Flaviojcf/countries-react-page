import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { api } from "../../services/api";
import { useQuery } from "react-query";
import {
  Container,
  ContainerCountry,
  ContainerCountryText,
  ContainerGroupCountry,
} from "./styles";

export function Home() {
  const [country, setCountry] = useState<any[]>([]);
  const { isFetching } = useQuery(["all"], () => getCountries(), {
    staleTime: 1000 * 60 * 10,
  });

  async function getCountries() {
    const response = await api.get("all");
    setCountry(response.data);
  }

  return (
    <Container>
      <ContainerGroupCountry>
        {isFetching ? (
          <ClipLoader
            size={150}
            color={"#123abc"}
            loading={isFetching}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
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
          </>
        )}
      </ContainerGroupCountry>
    </Container>
  );
}
