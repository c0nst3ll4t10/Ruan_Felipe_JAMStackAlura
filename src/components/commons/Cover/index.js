/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Text from '../../foundations/Text';
import { Box } from '../../layout/Box';
import { Grid } from '../../layout/Grid';

export default function Cover() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="center"
      backgroundImage="url(/images/CoverImage.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      alignItems="center"
    >
      <Grid.Container
        margin={{ xs: '310px 0', md: '271px 0' }}
      >
        <Text
          variant="titleCover"
          tag="h1"
          color="primary.main.color"
          textAlign="center"
          margin="0"
        >
          Ruan Felipe
        </Text>
        <Text
          variant="subTitleCover"
          tag="h1"
          color="tertiary.main.contrastText"
          textAlign="center"
          margin="0"
        >
          Portfólio
        </Text>
      </Grid.Container>
    </Box>
  );
}