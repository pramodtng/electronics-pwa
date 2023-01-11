/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import parse from 'html-react-parser'
import Link from 'next/link';
import { useRouter } from 'next/router';


const Phones = ({ post }) => {
  const router = useRouter()
  const STRAPI_BASEURL = 'https://admin.tashielectronics.com'
  const [showModal, setShowModal] = useState(false);
  if (router.isFallback) {
    <h2>Data loading</h2>
  }

  return (
    <div className="md:flex items-start justify-center py-6 2xl:px-20 md:px-6 px-4 shadow-lg rounded-lg border-black">
      <Link href="/">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
      </Link>

      <div className="xl:w-2/6 lg:w-2/5 w-80">
        <img className="w-full" alt="phone" src={`${STRAPI_BASEURL + post.attributes.image.data.attributes.url}`} />
        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border border-xl border-gray-300 text-xl p-4">
              Nu. {post.attributes.discPrice.toLocaleString()}/-
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-2xl font-medium mb-2">Freebies</h5>
              <div className="phonedetail-modal text-black-700 text-base mb-4">
                {
                  parseInt(post.attributes.sellingPrice - post.attributes.discPrice) > 30000 ? (
                    <div className="flex flex-col">
                      <div className="overflow-x-auto">
                        <div className="py-4 inline-block min-w-full">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                              <thead className="border-b bg-gray-800">
                                <tr>
                                  <th colSpan={2} className='text-white'>Diamond Package</th>
                                </tr>
                                <tr>
                                  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Particulars
                                  </th>
                                  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Monthly
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white border-b">
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Data Allowance
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    19,170MB
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Talk Time
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    N/A
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <h4 className='p-2'>FREE: S Pen and Cover</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                    : (

                      <div className="flex flex-col">
                        <div className="overflow-x-auto">
                          <div className="py-4 inline-block min-w-full">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                  <tr>
                                    <th colSpan={2} className='text-white'>Diamond Package</th>
                                  </tr>
                                  <tr>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                      Particulars
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                      Monthly
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Data Allowance
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      3,000 MB
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Talk Time
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Nu. 150
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <img className="w-full" alt="img of a girl posing" src={`${STRAPI_BASEURL + post.attributes.image.data.attributes.url}`} />
      </div>
      <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
            {post.attributes.title}
          </h1>
        </div>
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
          onClick={() => setShowModal(true)}
        >
          <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Check availability in store
        </button>
        <div>
          <p className="xl:pr-5 text-base lg:leading-tight leading-normal text-gray-600 mt-7"> {post.attributes.desc} </p>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <p className="text-base leading-4 text-gray-800">Phone Specifications</p>
            <div className={"phonedetail-modal pt-4 text-base leading-normal mt-4 text-gray-600 "}>
              {
                parse(post.attributes.network)
              }
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex flex-col max-w-6xl max-h-screen px-4 mx-auto sm:px-6">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start p-2 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-black float-left"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="text-gray-900 bg-gray-100">
                  <section className="flex flex-col max-w-6xl min-h-96 px-4 mx-auto sm:px-6">
                    <h2 className="mr-10 text-4xl font-bold leading-none md:text-4xl text-center pb-5">
                      Phone Availability Store Wise
                    </h2>
                    <div className="flex flex-wrap">
                      <div className="phonedetail-modal w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        {parse(post.attributes.availability.data.attributes.babesa)}
                      </div>
                      <div className="phonedetail-modal w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        {parse(post.attributes.availability.data.attributes.jungshina)}
                      </div>
                      <div className="phonedetail-modal w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        {parse(post.attributes.availability.data.attributes.mlcp)}
                      </div>
                      <div className="phonedetail-modal w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        {parse(post.attributes.availability.data.attributes.phuentsholing)}
                      </div>
                      <div className="phonedetail-modal w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        {parse(post.attributes.availability.data.attributes.thimphu)}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

    </div>
  );
}

export default Phones

export async function getStaticProps({ params }) {
  const posts = await fetch(`https://admin.tashielectronics.com/api/phones/${params.id}?populate=*`)
  const res = await posts.json()
  return {
    props: {
      post: res.data
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const posts = await fetch('https://admin.tashielectronics.com/api/phones?populate=*')
  const res = await posts.json()
  const paths = res.data.map((post) => {
    return {
      params: { id: post.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}
