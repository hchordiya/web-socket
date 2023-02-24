import { Stomp } from "@stomp/stompjs";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { setTodoAction } from "../../rtk/features/todoSlice";
import { useAppDispatch } from "../../rtk/hooks/hooks";
import { fetchAllTodoAsync } from "../../rtk/thunks/todo.thunks";
import Todo from "./todo.component";

const sock = new SockJS("http://localhost:8080/chat");
const stompClient = Stomp.over(sock);
const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchAllTodoAsync());
  }, [dispatch]);
  useEffect(() => {
    const connectCallback = () => {
      console.log("Connected to WebSocket");
      setIsConnected(true);

      stompClient.subscribe("/topic/messages", (message) => {
        const res = JSON.parse(message.body);
        dispatch(setTodoAction(res.body.data));
        console.log(res)
        // setMessages((messages) => [...messages, JSON.parse(message.body)]);
      });
    };
    const errorCallback = (error: any) => {
      console.log(`Error connecting to WebSocket: ${error}`);
      setIsConnected(false);
      setTimeout(() => {
        connect();
      }, 5000);
    };

    const connect = () => {
      stompClient.connect({}, connectCallback, errorCallback);
    };
    connect();
    console.log(isConnected)
    return () => {
      stompClient.disconnect(() => {
        console.log("Disconnected from WebSocket");
        setIsConnected(false);
      });
    };
  }, []);

  return <Todo />;
};

export default TodoContainer;
