import { Form, Formik } from "formik";
import { FC, memo } from "react";
import { connect } from "react-redux";
import { object, string } from "yup";
import { videoDetail } from "../modeles/video";
import Button from "./Button";
import Input from "./Input";
import { videoAddAction } from "./pureTS/action/video";

type CreatePostProps = {
    cancelClick:()=>void
    videoAdd:(video:videoDetail)=>void
};

const CreatePost: FC<CreatePostProps> = ({cancelClick,videoAdd,...props}) => {
    const onSubmit=(data:any)=>{
      const label=(document.getElementById('label')as any).value
      if(!label){
        return
      }
      data.label=label
      videoAdd(data)
      cancelClick()
    }
   const validationSchema=object().shape({
     title:string().required(),
     url:string().required().url(),
   })
   const initialValues={
    title:'',
    url:'',
   }
  return <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues}>
    <Form className="gap-y-4 ronnded-md shadow-md p-4 ">
    <select className="w-full" id="label" inputMode="text">
        <option value="education">education</option>
        <option value="entertainment">entertainment</option>
        <option value="gaming">gaming</option>
    </select>
    <Input name="title" placeholder=" enter video title"/>
    <Input name="url" placeholder=" your video link"/>
    <div className="flex gap-x-4">
    <Button  type="submit">Upload</Button>
    <Button theme="secondry" onClick={cancelClick} type="button">Cancel</Button>
    </div>
    </Form>
  </Formik>
};

CreatePost.defaultProps = {};
const mapDispatchToProps={
    videoAdd:videoAddAction
}

export default connect(undefined,mapDispatchToProps) (memo(CreatePost));