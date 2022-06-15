import { Box, Modal, Typography } from "@mui/material";
import useItemsQuery from "../useQuery/useItemsQuery";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#4e4e50",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  open,
  onClose,
  url,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
}) {
  const { data } = useItemsQuery(url);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={onClose}
    >
      <Box sx={style} textAlign="center">
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {data?.name}
        </Typography>
        <Typography id="modal-modal-title" sx={{ mt: 1 }}>
          Range: {data?.range}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {data?.desc[0]}
        </Typography>
      </Box>
    </Modal>
  );
}
