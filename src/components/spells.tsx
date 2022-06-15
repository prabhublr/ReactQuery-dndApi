import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import useSpellsSearchQuery from "../useQuery/useSpellsQuery";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import CustomModal from "./customModal";

const CustomList = styled(List)`
  width: 100%;
  max-width: 100% !important;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 250px;
    border: 1px solid #950740;
    color: #950740;
    border-radius: 8px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  svg {
    color: #950740;
  }
  .Mui-checked {
    color: #950740;
  }
`;

const FavButton = {
  backgroundColor: "#950740",
  color: "4e4e50",
};

const FavBtn = {
  color: "#950740",
  borderColor: "#950740",
};

export default function Spells() {
  const { data } = useSpellsSearchQuery();
  const [showFav, setShowFav] = useState(false);
  const [spellsData, setSpellsData] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemUrl, setItemUrl] = useState("");

  useEffect(() => {
    setSpellsData(data);
  }, [data]);

  const handleChange = (name: string, checked: boolean) => {
    setSpellsData((prevSpellsData) =>
      prevSpellsData?.map((prevSpellData) =>
        prevSpellData.name === name
          ? {
              ...prevSpellData,
              fav: checked,
            }
          : prevSpellData
      )
    );
  };

  const filteredSpellsData = useMemo(
    () =>
      showFav
        ? (spellsData ?? []).filter((spellData) => spellData.fav)
        : spellsData ?? [],
    [showFav, spellsData]
  );

  return (
    <Box textAlign="center" mt={3}>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography color="#950740" variant="h4">
          List of Duengon & Dragons Spells
        </Typography>
        <Button
          sx={showFav ? FavButton : FavBtn}
          onClick={() => setShowFav(!showFav)}
          variant={showFav ? "contained" : "outlined"}
        >
          Favourites
        </Button>
      </Box>
      <CustomList>
        {filteredSpellsData.map((item) => {
          return (
            <ListItem
              sx={{ mb: 2 }}
              key={item.url}
              secondaryAction={
                <Checkbox
                  edge="end"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onChange={(e: ChangeEvent<HTMLInputElement>, checked) =>
                    handleChange(item.name, checked)
                  }
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setItemUrl(item.url);
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </CustomList>
      <CustomModal
        url={itemUrl}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
}
