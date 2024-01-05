"use client";
import React, { use, useEffect, useState } from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import ReleaseInfo from "../dashboard/music/ReleaseInfo";
import AddTrack from "../dashboard/music/AddTrack";

import { FieldArray, Form, Formik, FormikHelpers, FormikValues, getIn, useFormik } from 'formik';
import { songUploadSchema } from "../../services/schema";
import { base64ToFormData } from "../../services/music.service";


export default function MusicUpload({ data, type }: { data: any, type: string }) {
  const [showInfo, setShowInfo] = useState(false)

  const onSubmit = async (values: any, actions: any ) => {
    console.log("--- ", values, actions ,  values.data[0].lyric) 
    // if(type == 'single'){
      const lyricFile = await base64ToFormData( values.data[0].lyric ,values.data[0].lyricName )
      // const musicFile = await base64ToFormData( values.data[0]. ,values.data[0].lyricName )
      const imageFile = await base64ToFormData( values.data[0].image )
      console.log("result file --- " , lyricFile , imageFile)
    // }
  }


  const handleInfo = (val: any) => {
    setShowInfo(val)
  }
// console.log("form data --- ", data  , showInfo)

  return (
    <div>
      <Formik  initialValues={{data}} validationSchema={songUploadSchema} 
      onSubmit={onSubmit}>
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form noValidate autoComplete="off">
          <FieldArray name="song">
            {() => (
              <div>
                <h1>{isValid}</h1>
                {data.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                    <Accordion defaultExpandedKeys={[String(data.length-1)]}  key={index}>
                      <AccordionItem
                        key={index}
                        aria-label="Track"
                        subtitle={<span>Press to expand</span>}
                        title={"Track  " + (index + 1)}
                        startContent={<MusicIcon className="text-secondary" />}
                      >
                        <div className="w-full justify-center mx-auto my-0">
                          <AddTrack handleInfo={handleInfo} />
                          {/* {  showInfo ?  */}
                          <ReleaseInfo formData={item} />
                           {/* : null } */}
                        </div>
                       
                      </AccordionItem>
                    </Accordion>
                    
                    </div>
                  )
  
                })}
              </div>
            )}
  
  
          </FieldArray>
          <Button type="submit" fullWidth color="primary"
          className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">
          Submit
        </Button>
        </Form >
        )}
      
      
      </Formik>
      
    </div >
  );
}