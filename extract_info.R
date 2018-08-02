#Create empty variable for error handling
empty_char <- character(0)

#Create function for extracting attributes from each post, extract_post
extract.post <- function(x) {
  curr_title <-
    i_post[x] %>%
    html_nodes(xpath = ".//div[@class='mbs _6m6 _2cnj _5s6c']") %>%
    html_text()
  if(identical(curr_title, empty_char)){
    return(i)
  }else{
    return(curr_title) 
  }
}

#Create function for extracting post dates
extract.date <- function(x) {
  curr_date_live <-
    i_post[x] %>%
    html_node(xpath = ".//abbr[@class='_5ptz timestamp livetimestamp']") %>%
    html_attr("title")
  
  curr_date_reg <-
    i_post[x] %>%
    html_node(xpath = ".//abbr[@class='_5ptz sfx_no_fix_timestamp']") %>%
    html_attr("title")
  
  if(!is.na(curr_date_live)){
    return(curr_date_live)
  }else if(!is.na(curr_date_reg)){
    return(curr_date_reg)
  }else{
    return(i) 
  }
}

#Create function for extracting post responses

#Post likes (and other reactions offered by Facebook)
extract.likes <- function(x){
  curr_react <- 
    i_post[x] %>%
    html_nodes(xpath = ".//a[@class='_3emk _401_']") %>%
    html_attr("aria-label")
  
  curr_react <- gsub(" .*$", "", curr_react)
  
  
  for(i in 1:length(curr_react)){
    if(grepl("K",curr_react[i])){
      curr_react[i] <- gsub("K", "000", curr_react[i])
      if(grepl("\\.", curr_react[i])){
        curr_react[i] <- gsub("\\.","",curr_react[i])
        curr_react[i] <- gsub("000", "00", curr_react[i])
      }
    }
  }
  
  curr_likes <-
    curr_react %>%
    as.integer() %>%
    sum()
  
  return(curr_likes)
}

#Number of post comments
extract.comments <- function(x){
  curr_com <- 
    i_post[x] %>%
    html_nodes(xpath = ".//a[@class='_ipm _-56']") %>%
    html_text()
  
  curr_com <- gsub(" .*$", "", curr_com)
  
  if(grepl(",",curr_com)){
    curr_com <- gsub(",", "", curr_com)
  }else if(grepl("K", curr_com)){
    curr_com <- gsub("K","000",curr_com)
    if(grepl("\\.", curr_com)){
      curr_com <- gsub("\\.","",curr_com)
      curr_com <- gsub("000","00",curr_com)
    }
  }
  curr_com <- as.integer(curr_com)
  
  return(curr_com)
}

#Number of shares
extract.shares <- function(x){
  curr_share <- 
    i_post[x] %>%
    html_node(xpath = ".//a[@class='_ipm _2x0m']") %>%
    html_text()
  
  curr_share <- gsub(" .*$", "", curr_share)
  
  if(grepl(",",curr_share)){
    curr_share <- gsub(",", "", curr_share)
  }else if(grepl("K", curr_share)){
    curr_share <- gsub("K","000",curr_share)
    if(grepl("\\.", curr_share)){
      curr_share <- gsub("\\.","",curr_share)
      curr_share <- gsub("000","00",curr_share)
    }
  }
  
  curr_share <- as.integer(curr_share)
  
  return(curr_share)
}

#Create function to determine whether the post is a video
is.video <- function(x){
  curr_post <- 
    i_post[x] %>%
    html_node(xpath = ".//span[@class='_ipm _2x0m']") %>%
    html_text()
  
  if(!is.na(curr_post)){
    return(TRUE)
  }else{
    return(FALSE)
  }
}

#Function for returning views for video posts
video.views <- function(x){
  curr_views <-
    i_post[x] %>%
    html_node(xpath = ".//span[@class='_ipm _2x0m']") %>%
    html_text()
  
  return(curr_views)
}