import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-b from-yellow-500 to-purple-700 text-white'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white-300'>
        <div>
          <h1 className='font-ibm w-full text-3xl font-bold text-[#552583]'>LeTherapy</h1>
          <p className='py-4'>
            With mental health being a major concern in the modern world, AI can be a tool to help us.
            That's why LeTherapy exists to help everyone better themselves.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-white-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Analytics
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Marketing
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Commerce
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-white-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Pricing
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Documentation
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Guides
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-white-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  About
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Blog
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Jobs
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Press
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-white-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Claim
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Policy
                </a>
              </li>
              <li className='py-2 text-sm'>
                <a href='https://www.lebronjames.com/' target='_blank' rel='noopener noreferrer'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;