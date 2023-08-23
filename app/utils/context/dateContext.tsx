"use client"
import { createContext, useState, useEffect } from "react";
import moment from "moment";

//Assets
import monthsList from "@/assets/constants/months.json";

//Utils
import { getSlots } from "../utils";

type DateContextType = {
  currentDate: Date;
  setCurrentDate: (value: Date) => void;
  stringDate: string;
  setStringDate: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  nextDay: () => void;
  prevDay: () => void;
  today: () => void;
  startOfDay: number;
  endOfDay: number;
  slots: any[];
}

type DateProviderProps = {
  children: React.ReactNode;
}

export const DateContext = createContext<DateContextType>({
  currentDate: new Date(),
  setCurrentDate: () => {},
  stringDate: "",
  setStringDate: () => {},
  month: "",
  setMonth: () => {},
  nextDay: () => {},
  prevDay: () => {},
  today: () => {},
  startOfDay: 5,
  endOfDay: 18,
  slots: [],
})

const SessionProvider = (props: DateProviderProps) => {
  const { children } = props;
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [stringDate, setStringDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const startOfDay =  5;
  const endOfDay = 18;
  const slots: object[] = getSlots(currentDate);

  

  useEffect(() => {
    if(currentDate) {
      updateStringDate(currentDate);
    }
  }, [currentDate, stringDate, month]);

  const updateStringDate = (currentDate: Date) => {
    setStringDate(`${monthsList[currentDate.getMonth()].label} ${currentDate.getDate()}, ${currentDate.getFullYear()}`);
    setMonth(monthsList[currentDate.getMonth()].label);
  }

  const nextDay = () => {
    let tomorrow = currentDate;
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
    updateStringDate(tomorrow);
  }

  const prevDay = () => {
    let yesterday = currentDate;
    yesterday.setDate(yesterday.getDate() - 1);
    setCurrentDate(yesterday);
    updateStringDate(yesterday);
  }

  const today = () => {
    let today = new Date();
    setCurrentDate(today);
    updateStringDate(today);
  }

  const values = {
    currentDate,
    setCurrentDate,
    stringDate,
    setStringDate,
    month,
    setMonth,
    nextDay,
    prevDay,
    today,
    startOfDay,
    endOfDay,
    slots,
  }

  return (
    <DateContext.Provider value={values}>
      {children}
    </DateContext.Provider>
  )
}

export default SessionProvider;