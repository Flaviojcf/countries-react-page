import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { Container } from "./styles";

import { ClipLoader } from "react-spinners";
import { apiPerName } from "../../services/apiPerName";


export function Country() {
  const { id }: any = useParams();
  const { state } = useLocation();
  const navigate = useNavigate()

  const { isFetching } = useQuery([id], () => getCountryInformation(), {
    staleTime: Infinity,
  });

  async function getCountryInformation() {
    try {
      const response = await apiPerName.get(id);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  function handleNavigate() {
    navigate('/')
  }

  return (
    <Container>
      <div >
        <button onClick={handleNavigate}>Voltar</button>
      </div>
      <div>
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
            <img src={state[0].flags.png} alt="" />
            <h1>{state[0].name.common}</h1>

            <p>Population:{state[0].population}</p>
            <p>Region:{state[0].region}</p>
            <p>Sub Region:{state[0].subregion}</p>
            <p>Capital:{state[0].capital}</p>

            <div>
              <h1>
                border countries
                <ul>
                  {state[0].borders?.map((border: any) => {
                    console.log(border)
                    return (
                      <li key={border}>
                        { border }
                      </li>
                    );
                  })}
                </ul>
              </h1>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
