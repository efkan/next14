'use client'
import {useParams} from 'next/navigation';

export default function ProfilePostID () {
  const params = useParams();

  console.log("ProfilePostID - params - id:", params.id);
  console.log("ProfilePostID - params - post_id:", params.post_id);

  return <div>my Profile Post ID page</div>
}