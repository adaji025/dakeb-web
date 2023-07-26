import { useState } from "react";
import { Text, Image, SimpleGrid, Group } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { IoImageOutline } from "react-icons/io5";

export function DropzoneComponent() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
            imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            radius="xl"
      />
    );
  });

  return (
    <div>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Group position="center" my={16}>
          <IoImageOutline size={30} />
        </Group>
        <div className="flex gap-5 justify-center">
          <Text align="center" className="underline text-dakeb-green-mid">
            Click to upload
          </Text>
          <Text align="center">Drop images here</Text>
        </div>

        <div className="mx-auto h-[100px] w-[100px] mt-10 rounded-full object-cover">
          {previews}
        </div>
      </Dropzone>
    </div>
  );
}
