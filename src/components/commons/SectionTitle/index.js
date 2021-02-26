/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eol-last */
import Text from '../../foundations/Text';
import { Box } from '../../layout/Box';

const SectionTitle = () => (
  <Box
    margin="64px 0"
  >
    <Text
      variant="sectionTitle"
      tag="h1"
      margin="0 10px"
      color="tertiary.main.contrastText"
    >
      Meus Projetos
    </Text>
  </Box>
);

export default SectionTitle;