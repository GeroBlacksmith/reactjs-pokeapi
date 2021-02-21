import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Page = ({ pokemonsters, managePage, page }: any) => {
  return (
    <Box className="App">
      <List>
        {pokemonsters.map((pkmn: any, i: number) => (
          <div key={i}>
            <Link
              to={{
                pathname: `/details/${pkmn.name}`,
                state: { pUrl: pkmn.url },
              }}
            >
              <ListItem button>
                <ListItemText primary={pkmn.name} />
              </ListItem>
            </Link>
            <hr/>
          </div>
        ))}
      </List>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => managePage(0)}
          variant="contained"
          color="primary"
        >
          page -
        </Button>
        <Button
          onClick={() => managePage(1)}
          disabled
        >
          {page }
        </Button>
        <Button
          onClick={() => managePage(1)}
          variant="contained"
          color="secondary"
        >
          page +
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Page;
