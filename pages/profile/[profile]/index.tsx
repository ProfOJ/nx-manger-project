import { ProfileDetails, ProfileHeader } from "@/containers/exportConts"
import { ProfileProvider } from "@/contexts/currentProfile"
import Error from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReactLoading from "react-loading"


export default function Profile() {
  const router = useRouter()
  const { profile } = router.query

  return (
    <>
      <Head>
        <title>{"Manger | Profile"}</title>
        <meta name="description" content="Manger Project - Fundraising on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/manger_favicon.svg" />
      </Head>
      {
        !profile 
          ? <ReactLoading type="bubbles" color="#827B93"/> 
          : typeof(profile) == "string" && profile.includes("0x") && profile.length == 42
            ? <>
              <ProfileProvider address={profile}>
                <ProfileHeader/>
                <ProfileDetails/>
              </ProfileProvider>
            </>
            : <Error statusCode={404}/>
      }


    </>
  )
}
