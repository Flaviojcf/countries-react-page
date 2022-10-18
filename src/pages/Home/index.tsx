import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useQuery } from "react-query";
import {
  Container,
  ContainerCountry,
  ContainerCountryText,
  ContainerGroupCountry,
} from "./styles";
import { NavigationMenuContainer } from "../../components/NavigationMenuContainer/NavigationMenu";
import { useTheme } from "../../hooks/useTheme";
import { queryClient } from "../../services/QueryClient";
import { apiPerName } from "../../services/apiPerName";

export function Home() {
  const [countries, setCountries] = useState<any[]>([]);
  const [AllCountries, setAllCountries] = useState<any[]>([]);
  const [countryInformations, setCountryInformations] = useState();
  const [search, setSearch] = useState("");
  const CountriesLength = countries.length;
  console.log(CountriesLength);

  const navigate = useNavigate();
  const { region } = useTheme();
  const { isFetching } = useQuery([region], () => getCountries(), {
    staleTime: 1000,
  });

  async function getCountries() {
    const response = await api.get(region);
    setCountries(response.data);
    setAllCountries(response.data);
  }

  function redirectToCountry(id: string) {
    handlePrefetchCountry(id)
    navigate(`/country/${id}`, {
      state: countryInformations,
    });
  }

  async function handlePrefetchCountry(id: string) {
    await queryClient.prefetchQuery(
      [id],
      async () => {
        const response = await apiPerName.get(id);

        setCountryInformations(response.data);
      },
      {
        staleTime: 1000 * 60 * 10,
      }
    );
  }

  function handleSearch() {
    console.log(!search)
    if (search.trim().length === 0)  {
      setCountries(AllCountries);
    } else {
      const teste = countries.filter((country) =>
        Object.values(country).join("").toLowerCase().includes(search)
      );
      setCountries(teste);
      setSearch('')
    }
  }

  return (
    <Container>
      <button onClick={handleSearch}>teste</button>
      <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}/>

      <NavigationMenuContainer />
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
        ) : CountriesLength === 0 ? (
          "Nenhum país encontrado"
        ) : (
          <>
            {countries.map((country: any, number = 1) => (
              <ContainerCountry
                key={country.name.official}
                onClick={() => redirectToCountry(country.name.official)}
                onMouseEnter={() =>
                  handlePrefetchCountry(country.name.official)
                }
              >
                <img src={country.flags.png} alt="" />
                <ContainerCountryText>
                  <p>
                    {number + 1} {country.name.official}
                  </p>
                  <span>
                    <h4>Population: {country.population}</h4>
                    <h4>Region: {country.region}</h4>
                    <h4>Capital: {country.capital}</h4>
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
