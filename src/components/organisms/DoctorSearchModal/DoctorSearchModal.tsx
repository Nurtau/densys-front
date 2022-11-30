import { useQuery } from "react-query";
import { useMemo, useState, useEffect } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { api } from "@app/api";
import { DoctorSearchRow } from "@app/components/molecules";

import { modalBoxStyles } from "./DoctorSearchModal.css";

interface DoctorSearchModalProps {
  closeModal(): void;
}

export const DoctorSearchModal = ({ closeModal }: DoctorSearchModalProps) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  const { data: allDoctors } = useQuery("doctors", () => api.getDoctors());
  const { data: specializations } = useQuery("specializations", () =>
    api.getSpecialisations()
  );

  const { data: searchedDoctors } = useQuery(
    ["searched-doctors", debouncedInput],
    () => api.searchDoctors(debouncedInput)
  );

  console.log(debouncedInput, searchedDoctors);

  const procedures = useMemo(() => {
    const procedures = (allDoctors ?? []).map((doctor) => doctor.procedure);
    return [...new Set(procedures)];
  }, [allDoctors]);

  const specializationsNames = useMemo(
    () => (specializations ?? []).map((spec) => spec.name),
    [specializations]
  );

  const doctorNames = (allDoctors ?? []).map((d) => d.name);
  const doctorSurnames = (allDoctors ?? []).map((d) => d.surname);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [input]);
  
  const options = ([
...doctorNames,
            ...doctorSurnames,
            ...specializationsNames,
            ...procedures,
  ]).filter(option => option.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className={modalBoxStyles}>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <SearchIcon />
        <Autocomplete
          freeSolo
          fullWidth
          id="free-solo-2-demo"
          disableClearable
          onChange={(_: any, newValue: string | null) => {
            setInput(newValue ?? "");
          }}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              size="medium"
              placeholder="Search doctor"
              variant="standard"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          mt: "32px",
          flex: "display",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {(searchedDoctors ?? []).map((doctor) => (
          <DoctorSearchRow doctor={doctor} onClick={closeModal} />
        ))}
      </Box>
    </div>
  );
};
