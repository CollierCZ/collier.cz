<script lang="ts">
  import Image from './Image.svelte'
  import Avatar from "../images/avatar.png?w=300;400;800&format=webp&srcset"
  import AvatarPlaceholder from "../images/avatar.png?w=10"
  export let title: string;
  export let link: string;
  export let imageSrcSet = Avatar;
  export let placeholder = AvatarPlaceholder;
</script>

<h2><a href={link}>{title}</a></h2>
  <Image srcset={imageSrcSet} placeholder={placeholder} alt="" />
<div><slot /></div>