import { useParams } from "@reach/router";
import { Box, Card, Flex, Image, Text, Title } from "components/atoms";
import Layout from "components/Layout";
import { format } from "date-fns";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookDetailState } from "stores/selectors";
import { bookDetailId } from "stores/states";

const BookDetail: React.FC = () => {
  const params = useParams();
  const [, setBookId] = useRecoilState(bookDetailId);
  const bookDetail = useRecoilValue(bookDetailState);

  useEffect(() => {
    setBookId(params.id);
    console.log(bookDetail);
    console.log(new Date(bookDetail?.read_at));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={bookDetail?.title}>
      <Flex
        justifyContent={["flex-start", null, "space-between"]}
        flexDirection={["column", null, "row-reverse"]}
        mx={[-4, null, null, "0px"]}
      >
        <Image
          data-testid="book-cover"
          src={bookDetail?.cover}
          alt={bookDetail.title}
          width={["100%", null, 215]}
          pt={["100%", null, 295]}
          height={0}
          autofit
          rounded
        />
        <Card
          mt={[-7, null, "0px"]}
          zIndex={5}
          border="none"
          borderRadius="30px"
          width="100%"
          maxWidth={450}
        >
          <Flex justifyContent="space-between" mb={6}>
            <Box>
              <Title as="h4" mt={0} mb={2}>
                {bookDetail?.title || <Skeleton />}
              </Title>
              <Text color="black.secondary" fontSize={0} semibold tight>
                {bookDetail?.author || <Skeleton />}
              </Text>
            </Box>
            <Text
              color="black.60"
              textAlign="center"
              uppercase
              bold
              tight
              fontSize={0}
              ml={4}
            >
              {bookDetail?.read_at && (
                <>
                  {format(new Date(bookDetail.read_at), "MMM")}
                  <br />
                  {format(new Date(bookDetail.read_at), "yyyy")}
                </>
              )}
            </Text>
          </Flex>

          <Text bold>My Review</Text>
          <Text lineHeight="175%" color="black.80">
            {bookDetail?.review}
          </Text>
        </Card>
      </Flex>
    </Layout>
  );
};

export default BookDetail;
