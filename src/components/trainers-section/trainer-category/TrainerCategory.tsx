import React, { useEffect, useState } from "react";
import { Select, SelectProps, Space, Tag } from "antd";
import "./TrainerCategory.scss";

const { CheckableTag } = Tag;

const tagsData = ["Yoga", "Fitness & Gym", "Gymnastics", "Running"];
const options: SelectProps["options"] = tagsData.map((tag) => {
  return { value: tag, label: tag };
});

const TrainerCategory = () => {
  const [selectedTag, setSelectedTag] = useState<string>("Yoga");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileDevice = window.matchMedia("(max-width: 767px)");
      setIsMobile(mobileDevice.matches);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTag = checked ? tag : selectedTag;
    setSelectedTag(nextSelectedTag);
  };

  return (
    <>
      {isMobile ? (
        <Select
          size={"middle"}
          defaultValue={tagsData[0]}
          style={{ width: 200 }}
          options={options}
        />
      ) : (
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectedTag.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </Space>
      )}
    </>
  );
};

export default TrainerCategory;
