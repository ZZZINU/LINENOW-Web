//components
import * as S from "./MyWaitingListPage.styled";
import WaitingCard from "@components/waitingCard/WaitingCard";

// dummy
import { dummyWaitingsResponse } from "@apis/dummy/dummyWaitingsResponse";

const MyWaitingListPage = () => {
  return (
    <S.MyWaitingListPageWrapper>
      {dummyWaitingsResponse.map((item, index) => (
        <WaitingCard
          key={index}
          waiting={item}
          targetTime={item.readyToConfirmAt}
        />
      ))}
    </S.MyWaitingListPageWrapper>
  );
};

export default MyWaitingListPage;
