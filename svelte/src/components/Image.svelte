<script lang="ts">
  import Avatar from "../images/avatar.png?w=300;400;800;1200&format=webp&srcset"
  import AvatarPlaceholder from "../images/avatar.png?w=10"
  export let srcset = Avatar;
  export let placeholder = AvatarPlaceholder;
  export let alt = "";
</script>

<div class="px-8">
  <picture>
    <source
      srcset={srcset}
      sizes="(max-width: 800px) 100vw, 800px"
    />
    <img
      class="p-0"
      src={placeholder}
      alt={alt}
      loading="lazy"
      decoding="async"
      style="background-size: cover;background-image: url({placeholder});"
    />
  </picture>
</div>