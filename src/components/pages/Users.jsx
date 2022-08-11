import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/TSuq-9UW5n0",
    name: `smith-${val}`,
    email: "xxx@example.com",
    phone: "0110-111-222",
    company: {
      name: "test .com"
    },
    website: "www.aaa.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザー一覧ページです</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
