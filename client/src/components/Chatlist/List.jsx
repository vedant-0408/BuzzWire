import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { GET_INITIAL_CONTACTS_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import ChatLIstItem from "./ChatLIstItem";

function List() {
  const [{ userInfo, userContacts = [], filteredContacts = [] }, dispatch] = useStateProvider(); // Provide default values

  useEffect(() => {
    const getContacts = async () => {
      try {
        if (!userInfo?.id) return; // Ensure userInfo exists before making the request

        const { data: { users, onlineUsers } } = await axios(`${GET_INITIAL_CONTACTS_ROUTE}/${userInfo.id}`);
        dispatch({ type: reducerCases.SET_ONLINE_USERS, onlineUsers });
        dispatch({ type: reducerCases.SET_USER_CONTACTS, userContacts: users });
      } catch (err) {
        console.log("Error fetching contacts:", err); // Improved error message
      }
    };

    if (userInfo?.id) {
      getContacts();
    }
  }, [userInfo, dispatch]);

  return (
    <div className="bg-search-input-container-background flex-auto overflow-auto max-h-full custom-scrollbar">
      {filteredContacts.length > 0
        ? filteredContacts.map((contact) => <ChatLIstItem data={contact} key={contact.id} />)
        : userContacts.map((contact) => <ChatLIstItem data={contact} key={contact.id} />)}
    </div>
  );
}

export default List;
