import { Select , Tooltip} from 'antd';

const CustomSelect = ({ defaultValue, options, onChange }) => {
  return (
    <Tooltip title="點擊以選擇" >
      <Select
        mode="single"
        showArrow={true}
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
      />
    </Tooltip>
  );
};

export { CustomSelect }
