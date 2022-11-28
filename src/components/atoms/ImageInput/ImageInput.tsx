import { Typography } from "@mui/material";

import { toBase64 } from "@app/lib";

import {
  inputStyle,
  containerStyle,
  imageStyle,
  uploadSignWrapper,
} from "./ImageInput.css";

interface ImageInputProps {
  value?: string;
  onChange: (base64: string) => void;
  disabled?: boolean;
}

export const ImageInput = ({
  value,
  onChange,
  disabled = false,
}: ImageInputProps) => {
  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return null;
    try {
      const base64 = await toBase64(file);
      onChange(base64);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <label className={containerStyle} htmlFor="image-input" style={{cursor: disabled ? "auto" : "pointer"}}>
      <input
        disabled={disabled}
        className={inputStyle}
        id="image-input"
        type="file"
        accept="image/*"
        onChange={onInputChange}
      />
      <img src={value} className={imageStyle} />
      <div className={uploadSignWrapper}>
        <Typography color="white" variant="body1">
          Photo
        </Typography>
      </div>
    </label>
  );
};
