import {Controller, useForm} from "react-hook-form";
import {TagsInput} from "react-tag-input-component";
import {Alert, Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addTag, fetchContactById} from "../../store/contacts/asyncActions.js";
import {CreateLoadingButton} from "../CreateLoadingButton";

const AddTagForm = ({id, tags}) => {
  const dispatch = useDispatch();
  const {isTagAdding} = useSelector((state) => state.contacts);
  const {
    formState: {errors},
    handleSubmit,
    reset,
    control,
    setValue
  } = useForm();

  const handleSubmitForm = async (data) => {
    const prevTags = tags?.map((value) => value.tag);
    const payload = {
      id,
      tags: [...prevTags, ...data.tags]
    };

    try {
      await dispatch(addTag(payload));
      dispatch(fetchContactById(id));
      reset();
    } catch (e) {
      return e;
    }
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        rules={{
          validate: (value) => value.length > 0 || "Minimum one tag is required"
        }}
        render={({field: {onChange, value}}) => (
          <TagsInput
            value={value}
            onChange={(tags) => {
              onChange(tags);
              setValue('tags', tags);
            }}
            name="tags"
            placeHolder="Add new Tag"
          />
        )}
      />
      {errors.tags && <Alert severity="error">{errors.tags.message}</Alert>}
      <CreateLoadingButton
        loading={isTagAdding}
        type="submit"
        variant="contained"
        fullWidth={true}
        sx={{marginTop: '24px !important'}}
      >
        Add Tag
      </CreateLoadingButton>
    </Box>
  );
};

export default AddTagForm;
